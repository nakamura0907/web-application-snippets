import Exception from "@/utils/exception";

describe("Exceptionクラス", () => {
  it("Errorを継承している", () => {
    const exception = new Exception("test");

    expect(exception).toBeInstanceOf(Error);
    expect(exception instanceof Error).toBeTruthy();
  });
  it("statusプロパティを持つ", () => {
    const exception = new Exception("test");
    const exception2 = new Exception("test", 400);

    expect(exception).toHaveProperty("status");
    expect(exception.status).toBe(500);
    expect(exception2.status).toBe(400);
  });
  it("内部エラーか判定できる", () => {
    const exception = new Exception("test");
    const exception2 = new Exception("test", 400);

    expect(exception.isInternalError).toBeTruthy();
    expect(exception2.isInternalError).toBeFalsy();
  });
});
