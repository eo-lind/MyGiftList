import React from "react"
import { Routes, Route } from "react-router-dom"
import GiftList from "./GiftList"
import RecipientList from "./RecipientList"
import GiftForm from "./GiftForm"

const ApplicationViews = () => {
  return (
      <Routes>
          <Route path="/">
              <Route index element={<GiftList />} />

              <Route path="gifts">
                  <Route index element={<GiftList />} />
                  <Route path="add" element={<GiftForm />} />
              </Route>

              <Route path="recipients">
                  <Route index element={<RecipientList />} />
              </Route>
          </Route>
          <Route path="*" element={<p>Oh no! There's nothing here!</p>} />
      </Routes>
  )
}

export default ApplicationViews