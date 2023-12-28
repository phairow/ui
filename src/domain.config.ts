const RATEKL_CORE_PROTOCOL = process.env.NEXT_PUBLIC_RATEKL_CORE_PROTOCOL;
const RATEKL_CORE_PORT = process.env.NEXT_PUBLIC_RATEKL_CORE_PORT;
const RATEKL_CORE_SUFFIX = process.env.NEXT_PUBLIC_RATEKL_CORE_SUFFIX;
const RATEKL_CORE_API_PATH = process.env.NEXT_PUBLIC_RATEKL_CORE_API_PATH;
const RATEKL_CORE_ACTUAL_PORT = process.env.NEXT_PUBLIC_RATEKL_CORE_ACTUAL_PORT;

const protocol = `${RATEKL_CORE_PROTOCOL ?? 'https'}://`;
const port = RATEKL_CORE_PORT ? `:${RATEKL_CORE_PORT}` : '';
const suffix = RATEKL_CORE_SUFFIX ? `.${RATEKL_CORE_SUFFIX}` : '';
const apiPath = RATEKL_CORE_API_PATH ? `/${RATEKL_CORE_API_PATH}` : '/';
const actualPort = RATEKL_CORE_ACTUAL_PORT ? `:${RATEKL_CORE_ACTUAL_PORT}` : '3333';

export const domainConfig = {
  protocol,
  port,
  suffix,
  apiPath,
  actualPort,
};
