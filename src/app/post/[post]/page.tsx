import post from "@/utils/post";
const Post = (props: { params: { post: string } }) => {
  return <>{props.params.post}</>;
};
export async function generateStaticParams() {
  return post.map((post) => ({
    post: post[0],
  }));
}
export default Post;
