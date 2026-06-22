function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center gap-3 p-2 bg-gray-50">
      <h1 className="text-6xl font-bold text-red-500">
        404
      </h1>

      <h2 className="text-2xl text-gray-600">
        Invitation not found
      </h2>

      <p className="max-w-md text-gray-600">
        The link you followed may be broken or the invitation has expired.
      </p>
    </div>
  );
}

export default NotFoundPage;
