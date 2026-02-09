import { useState, useEffect } from 'react'

/**
 * Parse a CSV line properly handling quoted fields with commas
 */
const parseCSVLine = (line) => {
  const result = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]
    const nextChar = line[i + 1]

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        current += '"'
        i++
      } else {
        inQuotes = !inQuotes
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim())
      current = ''
    } else {
      current += char
    }
  }

  result.push(current.trim())
  return result
}

/**
 * Custom hook for loading and parsing publications from CSV
 */
export const usePublications = () => {
  const [publications, setPublications] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const parseCSV = (text) => {
    const lines = text.split('\n').filter((line) => line.trim())
    if (lines.length === 0) return []

    const headers = parseCSVLine(lines[0]).map((h) => h.toLowerCase().trim())

    const data = []

    for (let i = 1; i < lines.length; i++) {
      const values = parseCSVLine(lines[i])
      if (values.length === 0) continue

      const row = {}
      headers.forEach((header, index) => {
        row[header] = values[index] || ''
      })

      data.push(row)
    }

    return data
  }

  const loadPublications = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(
        '/publications.csv?t=' + new Date().getTime(),
      )
      if (!response.ok) {
        throw new Error('Publications file not found.')
      }

      const csvData = await response.text()
      const parsedData = parseCSV(csvData)

      const processedData = parsedData
        .map((row, index) => {
          // Extract and clean all fields
          const pmid = (row['pmid'] || row['pubmed_id'] || '').trim()
          const doi = (row['doi'] || '').trim()
          const title = (row['title'] || row['publication title'] || '').trim()
          const authors = (row['authors'] || row['author'] || '').trim()
          const year = (row['year'] || row['date'] || '').trim()
          const journal = (row['journal'] || row['journal name'] || '').trim()
          const url = (row['url'] || row['link'] || '').trim()
          const abstract = (row['abstract'] || '').trim()

          // Generate unique ID
          let id
          if (pmid) {
            id = `${pmid}-${index}`
          } else if (doi) {
            const shortDoi = doi.substring(0, 30).replace(/[^\w]/g, '-')
            id = `doi-${shortDoi}-${index}`
          } else {
            const shortTitle = title.substring(0, 20).replace(/[^\w]/g, '-')
            id = `pub-${index}-${shortTitle}`
          }

          return {
            id,
            pubmedId: pmid,
            title,
            authors,
            date: year,
            journal,
            link: url,
            doi,
            abstract,
          }
        })
        .filter((pub) => {
          // Skip entries without titles
          if (!pub.title || pub.title.toLowerCase() === 'nan') {
            return false
          }

          // Skip entries without valid years (THIS IS THE FIX)
          const yearNum = parseInt(pub.date)
          if (!pub.date || isNaN(yearNum)) {
            return false // Use false, not null
          }

          // Optional: Skip entries with obviously malformed titles
          // (like "README.md", "RESEARCH OUTPUT", etc.)
          const commaCount = (pub.title.match(/,/g) || []).length
          if (commaCount > 10) {
            // Increase threshold to avoid false positives
            return false
          }

          return true
        })

      console.log(`Successfully loaded ${processedData.length} publications`)
      setPublications(processedData)
      setLoading(false)
    } catch (err) {
      console.error('Error loading publications:', err)
      setError(err.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    loadPublications()
  }, [])

  return { publications, loading, error, retry: loadPublications }
}
