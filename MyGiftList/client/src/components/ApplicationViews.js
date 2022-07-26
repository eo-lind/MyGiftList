import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import GiftList from "./GiftList"
import RecipientList from "./RecipientList"
import GiftForm from "./GiftForm"
import RecipientForm from "./RecipientForm"
import RecipientDetails from "./RecipientDetails"
import Login from "./Login"
import Register from "./Register.js"

const ApplicationViews = ({ isLoggedIn }) => {
  return (
      <Routes>
          <Route path="/">
              <Route
                  index
                  element={isLoggedIn ? <GiftList /> : <Navigate to="/login" />}
              />

              <Route
                  path="add"
                  element={
                      isLoggedIn ? <GiftList /> : <Navigate to="/login" />
                  }
              />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />

              <Route path="gifts">
                  <Route index element={<GiftList />} />
                  {/* <Route path=":id" element={<GiftDetails />} */}
                  <Route path="add" element={<GiftForm />} />
              </Route>

              <Route path="recipients">
                  <Route index element={<RecipientList />} />
                  <Route path=":id" element={<RecipientDetails />} />
                  <Route path="add" element={<RecipientForm />} />
              </Route>
              <Route path="user" element={<p>Oh no! There's nothing here!</p>} />
          </Route>
      </Routes>
  )
}

export default ApplicationViews