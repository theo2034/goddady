import { screen } from "@testing-library/react";
import { RepositoryDetails } from "./RepositoryDetails";
import { renderWithProviders } from "../../store/utils/test-utils";

describe("RepositoryDetails", () => {
  const repo = {
    name: "TEST",
    description: "TEST DESCR",
    forks: "1",
  };

  it("should render RepositoryDetails", () => {
    renderWithProviders(<RepositoryDetails repository={repo} />);

    expect(screen.getByText("TEST")).toBeInTheDocument();
    expect(screen.getByText("TEST DESCR")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
