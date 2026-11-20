// Separate from the written homepage reviews. Replace each preview entry with
// the client's name, position, portrait thumbnail, and 11-character YouTube ID.
// Set placeholder to false when real client details are supplied.
export interface VideoTestimonial {
  name: string;
  position: string;
  thumbnail: string;
  youtubeId?: string;
  youtubeUrl?: string;
  placeholder?: boolean;
}

// Accept a full YouTube/Shorts link or a video ID. Missing links never redirect.
export function getYoutubeId(value?: string): string | undefined {
  if (!value) return undefined;
  if (/^[\w-]{11}$/.test(value)) return value;
  try {
    const url = new URL(value);
    const host = url.hostname.replace(/^www\./, '');
    const parts = url.pathname.split('/').filter(Boolean);
    const id = host === 'youtu.be' ? parts[0]
      : ['youtube.com', 'm.youtube.com', 'youtube-nocookie.com'].includes(host)
        ? (['shorts', 'embed', 'live'].includes(parts[0]) ? parts[1] : url.searchParams.get('v'))
        : undefined;
    return id && /^[\w-]{11}$/.test(id) ? id : undefined;
  } catch { return undefined; }
}

// Unsplash stock portraits are design previews, not actual client endorsements.
// Sources: photo-1560250097-0b93528c311a, photo-1519085360753-af0119f7cbe7,
// photo-1580489944761-15a19d654956, photo-1573496359142-b8d87734a5a2.
export const videoTestimonials: VideoTestimonial[] = [{
  name: 'Sherisse Cohen',
  youtubeId: '4VJQ3iTQ3ZU',
  position: 'Sydney psychologist',
  thumbnail: '/images/Sherisse Cohen.jpeg',
}, {
  name: 'Client name',
  position: 'Position, Company',
  thumbnail: '/images/testimonial-portrait-2.jpg',
  placeholder: true,
  youtubeUrl: '', // Paste this client's YouTube link here.
}, {
  name: 'Client name',
  position: 'Position, Company',
  thumbnail: '/images/testimonial-portrait-3.jpg',
  placeholder: true,
  youtubeUrl: '', // Paste this client's YouTube link here.
}, {
  name: 'Client name',
  position: 'Position, Company',
  thumbnail: '/images/testimonial-portrait-4.jpg',
  placeholder: true,
  youtubeUrl: '', // Paste this client's YouTube link here.
}];