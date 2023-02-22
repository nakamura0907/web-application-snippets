export type AppSettings = {
  port: number;
};
export type DatabaseSettings = {};

/**
 * 設定クラス
 *
 * 環境変数から設定を取得する
 */
class Config {
  get appSettings(): AppSettings {
    return {
      port: process.env.PORT ? parseInt(process.env.PORT) : 3001,
    };
  }

  get databaseSettings(): DatabaseSettings {
    return {};
  }
}

export default new Config();
