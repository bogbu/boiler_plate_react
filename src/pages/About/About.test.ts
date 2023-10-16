/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'
import {render,waitFor} from "@testing-library/react"
import About from "./About.tsx"
import Test from "./components/Test.tsx";

describe("About page", () => {
    it("is layout rendering", () => {
        // ARRANGE
        render(About());
        // ACT (ex click)
        // ASSERT
        waitFor(() => expect(Test()).toBeInTheDocument());
    })
})