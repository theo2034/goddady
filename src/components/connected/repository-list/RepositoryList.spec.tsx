import { screen } from "@testing-library/react";
import { RepositoryList } from "./RepositoryList";
import { renderWithProviders } from "../../../store/utils/test-utils";

afterEach(() => {
  jest.restoreAllMocks();
});

describe("RepositoryList", () => {
  it("should render RepositoryList", async () => {
    renderWithProviders(<RepositoryList />);

    const repoItems = await screen.findAllByTestId("godaddy-repository-item");
    expect(repoItems.length).toEqual(2);

    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByText("test2")).toBeInTheDocument();
  });
});
