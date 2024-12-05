import { act, renderHook } from "@testing-library/react-hooks";
import { useMounted } from "../useMounted";

describe("useMounted", () => {
  it("should return true after component is mounted", async () => {
    const { result } = renderHook(() => useMounted());

    await act(async () => {
      await result.current;
    });

    expect(result.current).toBe(true);
  });
});
