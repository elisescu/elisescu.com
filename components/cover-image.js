import cn from 'classnames'
import Link from 'next/link'

const myLoader = ({ src, width, quality }) => {
  return `/static/${src}}`
}

export default function CoverImage({ title, src, slug, height, width }) {
  const image = src && (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm', {
        'transition-shadow duration-200 hover:shadow-md': slug,
      })}
      layout="responsive"
      width={width}
      height={height}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
