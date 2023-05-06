import type { Pokemon } from "../services/graphql";
export function createError(code: string, message: string) {
  return {
    error: {
      code: code,
      message: message,
    },
  };
}

export function paginateResult(result: Pokemon[], page: number, limit: number) {
  const count = result.length;
  let end = limit * page;
  let start = limit * (page - 1) + 1;

  if (end > count) {
    end = count;
  }

  const filteredResult = result.filter((item, idx) => {
    const index = idx + 1;
    return index >= start && index <= end;
  });

  return {
    total: count,
    page,
    limit,
    result: filteredResult,
  };
}
