export function generateRelativeUrl(
  url: string,
  basePath = import.meta.env.BASE_URL,
) {
  const normalizedBasePath = basePath.endsWith("/")
    ? basePath.slice(0, -1)
    : basePath;
  const normalizedUrl = url.startsWith("/") ? url : `/${url}`;

  return `${normalizedBasePath}${normalizedUrl}`.replace(/([^:]\/)\/+/g, "$1");
}
