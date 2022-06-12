import { screen } from "@testing-library/react";
import { RepositoryItem } from "./RepositoryItem";
import { renderWithProviders } from "../../store/utils/test-utils";

describe("RepositoryItem", () => {
  it("should render RepositoryItem", () => {
    renderWithProviders(<RepositoryItem name="test" id="123" />);
    const anchorTag = screen.getByRole("link", { name: "test" });
    expect(anchorTag).toHaveAttribute("href", "/123");
    expect(anchorTag).toHaveTextContent("test");
  });
});
