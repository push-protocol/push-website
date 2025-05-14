import { useState, useEffect } from 'react';

const RSS_FEED_URL = 'https://push.org/blog/rss.xml';

const useFetchRecentBlogs = () => {
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const response = await fetch(RSS_FEED_URL);
        if (!response.ok) throw new Error('Failed to fetch RSS feed.');

        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'application/xml');

        const parseError = xml.querySelector('parsererror');
        if (parseError) throw new Error('Error parsing RSS feed.');

        const items = Array.from(xml.querySelectorAll('item')).slice(0, 4);

        const blogs = await Promise.all(
          items.map(async (item) => {
            const title =
              item.querySelector('title')?.textContent.trim() ||
              'Untitled Post';
            const link = item.querySelector('link')?.textContent.trim() || '#';
            const pubDate =
              item.querySelector('pubDate')?.textContent.trim() ||
              'Unknown Date';

            const children = Array.from(item.children);
            const contentEncodedElement = children.find(
              (child) => child.nodeName.toLowerCase() === 'content:encoded'
            );
            const contentEncoded = contentEncodedElement
              ? contentEncodedElement.textContent
              : null;

            // Fallback if content:encoded is empty or missing
            const rawContent = contentEncoded || 'No content available.';
            const description = rawContent.replace(/<[^>]*>/g, '').trim();

            // Calculate reading time (approx. 200 words per minute)
            const wordCount = description.split(/\s+/).length;
            const readingTime = Math.max(1, Math.ceil(wordCount / 200));

            // Fetch Open Graph image from the blog post URL
            let imageUrl = null;
            try {
              const postResponse = await fetch(link);
              const postText = await postResponse.text();

              // Extract the Open Graph image
              const tempDiv = document.createElement('div');
              tempDiv.innerHTML = postText;
              const ogImage = tempDiv.querySelector(
                'meta[property="og:image"]'
              );
              if (ogImage) {
                imageUrl = ogImage.getAttribute('content');
              }
            } catch (err) {
              console.error(
                `Error fetching Open Graph metadata for ${link}:`,
                err
              );
            }

            return {
              title,
              link,
              pubDate,
              description,
              readingTime,
              imageUrl,
            };
          })
        );

        setRecentBlogs(blogs);
      } catch (err) {
        console.error('Error fetching RSS feed:', err);
        setError(err.message);
      }
    };

    fetchRSS();
  }, []);

  return { recentBlogs, error };
};

export default useFetchRecentBlogs;
