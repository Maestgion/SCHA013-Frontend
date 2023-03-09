function Post({ post }) {
  return (
    <div className="space-y-4">
      <div className="flex gap-2 items-center">
        <img src={post?.profileUrl} alt={post?.author} className="h-6" />
        <p className="text-lg font-medium">{post?.author}</p>
      </div>

      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 p-4">
        <img
          className="object-cover w-80 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={post?.imageUrl}
          alt=""
        />
        <div className="flex flex-col justify-between px-4 leading-normal">
          <p className="mb-3 h-80 overflow-hidden font-normal text-gray-700">
            {post?.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
