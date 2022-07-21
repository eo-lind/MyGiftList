import React from "react"
import { Routes, Route } from "react-router-dom"
import GiftList from "./GiftList"

const ApplicationViews = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<GiftList />} />

        <Route path="gifts">
          <Route index element={<GiftList />} />
        </Route>
      </Route>
      <Route path="*" element={<p>Oh no! There's nothing here!</p>} />
    </Routes>
  )
}

export default ApplicationViews