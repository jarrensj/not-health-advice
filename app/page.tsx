import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        not health advice
      </h1>
      <p className="mb-4">
        {`I'm a software engineer turned trader. My focus has shifted from my career to my health. I've always been a hypochondriac though and have OCD. As a trader, I rely on my mental (headspace) and physical well-being. If I don't feel well, I definitely get punished by the markets. These notes are references for myself and are not medical or financial advice. I'm not a medical professional or financial advisor.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
