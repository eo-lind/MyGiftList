import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import GiftList from "./GiftList"
import RecipientList from "./RecipientList"
import GiftForm from "./GiftForm"
import RecipientForm from "./RecipientForm"
import RecipientDetails from "./RecipientDetails"
import RecipientGiftEditForm from "./RecipientGiftEditForm"
import Login from "./Login"
import Register from "./Register.js"
import Home from "./Home"

const ApplicationViews = ({ isLoggedIn }) => {
  return (
      <Routes>
          <Route path="/">
              <Route
                  index
                  element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
              />

              <Route
                  path="add"
                  element={isLoggedIn ? <GiftList /> : <Navigate to="/login" />}
              />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />

              <Route path="gifts">
                  <Route index element={isLoggedIn ? <GiftList /> : <Navigate to="/login" />} />
                  <Route path="add" element={isLoggedIn ? <GiftForm /> : <Navigate to="/login" />} />
              </Route>

              <Route path="recipientgifts">
                <Route path=":recipientGiftId/edit" element={isLoggedIn ? <RecipientGiftEditForm /> : <Navigate to="/login" />} />
              </Route>

              <Route path="recipients">
                  <Route index element={isLoggedIn ? <RecipientList /> : <Navigate to="/login" />} />
                  <Route path=":id" element={isLoggedIn ? <RecipientDetails /> : <Navigate to="/login" />} />
                  <Route path="add" element={isLoggedIn ? <RecipientForm /> : <Navigate to="/login" />} />
              </Route>

              <Route path="user" element={<p>Oh no! There's nothing here!</p>} />
              <Route path="*" element={<p>Oh no! There's nothing here!</p>} />
            </Route>
      </Routes>
  )
}

export default ApplicationViews