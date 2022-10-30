export default function PostTitle({ children }) {
  return (
    <h1
      className="mb-12 text-center font-space-grotesk text-3xl font-bold
                   leading-tight tracking-tighter md:text-left md:text-4xl md:leading-none
                   lg:text-5xl"
    >
      {children}
    </h1>
  )
}
