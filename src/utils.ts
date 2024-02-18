export function generateRelativeUrl(
  url: string,
  basePath = process.env.TINA_BASE_PATH || "",
) {
  const normalizedBasePath = basePath.endsWith("/")
    ? basePath.slice(0, -1)
    : basePath;
  const normalizedUrl = url.startsWith("/") ? url : `/${url}`;

  return `/${normalizedBasePath}${normalizedUrl}`.replace(/([^:]\/)\/+/g, "$1");
}
