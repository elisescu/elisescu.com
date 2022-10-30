import markdownStyles from './markdown-styles.module.css'

export default function PostBody({ content }) {
  return (
    <div className="prose prose-slate mx-auto max-w-2xl text-gray-800 prose-h3:font-space-grotesk lg:prose-xl">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
