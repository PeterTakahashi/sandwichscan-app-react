import { type TokenRead } from "@/types/api/token/token";

type TokenIconProps = {
  token?: TokenRead | null;
};

const TokenIcon = ({ token }: TokenIconProps) => {
  return (
    <>
      {token == null || token.logo_url == null ? (
        <div className="size-7 rounded-full ring-2 ring-white bg-slate-200 dark:bg-slate-700 flex items-center justify-center shadow">
          <span className="text-xs text-slate-500 dark:text-slate-400">?</span>
        </div>
      ) : (
        <img
          src={token.logo_url}
          alt={token.symbol}
          className="size-7 rounded-full ring-2 ring-white shadow"
        />
      )}
    </>
  );
};
export { TokenIcon };
