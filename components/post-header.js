import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:mb-12 md:block"></div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        {coverImage && (
          <CoverImage
            title={title}
            src={coverImage}
            height={620}
            width={1240}
          />
        )}
      </div>
      {/* <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div> */}
    </>
  )
}
