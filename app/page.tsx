import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        not health advice
      </h1>
      <p className="mb-4">
        {`I'm a software engineer turned trader. My focus has shifted from my career to my health.`}
      </p>
      <p className="mb-4">
        {`These notes are references for myself and are not medical or financial advice. I'm not a medical professional or financial advisor. The information presented may be biased and incorrect. Please do your own research.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
