import type { Express, Request, Response, NextFunction } from "express";
import Exception from "@/utils/exception";

type ErrorResponse = {
  message: string;
};

/**
 * エラーハンドリングミドルウェア
 */
export const errorHandling = (app: Express) => {
  app.use(
    (
      error: Error,
      _: Request,
      res: Response<ErrorResponse>,
      __: NextFunction
    ) => {
      if (error instanceof Exception) {
        // 必要ならエラーログ出力

        const status = error.status;
        const body = {
          message: error.message,
        };

        res.status(status).send(body);
        return;
      }

      const status = 500;
      const body = {
        message: "予期せぬエラーが発生しました",
      };
      res.status(status).send(body);
    }
  );
};

