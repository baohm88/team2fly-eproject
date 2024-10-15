import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import { isEmpty, isEqualsToOtherValue } from "../../util/validation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Input from "../Input";

export default function UpdatePassword() {
    const { user } = useContext(UserContext);
    const [oldPasswordError, setOldPasswordError] = useState();
    const [newPasswordError, setNewPasswordError] = useState();
    const [newPassword2Error, setNewPassword2Error] = useState();
    const [serverError, setServerError] = useState();
    const navigate = useNavigate();

    document.title = "Update Password";

    console.log(user);

    async function handleSubmit(e) {
        e.preventDefault();

        const fd = new FormData(e.target);
        const userData = Object.fromEntries(fd.entries());

        // validate user inputs

        if (isEmpty(userData.old_password)) {
            setOldPasswordError("Current password is required");
            document.getElementById("old_password").focus();
            return;
        }
        setOldPasswordError(false);

        if (isEmpty(userData.new_password)) {
            setNewPasswordError("New password is required");
            document.getElementById("new_password").focus();
            return;
        }
        setNewPasswordError(false);

        if (isEmpty(userData.confirm_new_password)) {
            setNewPassword2Error("Confirm new password is required");
            document.getElementById("confirm_new_password").focus();
            return;
        }
        setNewPassword2Error(false);

        if (
            !isEqualsToOtherValue(
                userData.new_password,
                userData.confirm_new_password
            )
        ) {
            setNewPasswordError("Passwords must match");
            document.getElementById("confirm_new_password").focus();
            return;
        }
        setNewPasswordError(false);

        delete userData.confirm_new_password;

        console.log(userData);

        try {
            const response = await axios.post(
                `http://localhost/project/user/change_password`,
                userData,
                {
                    headers: {
                        "Content-Type": "application/json", // Sending data as JSON
                    },
                }
            );

            console.log(response);

            if (response.data.type === "success") {
                navigate("/profile");
            } else {
                // type = Error
                console.log(
                    "Updating password failed: ",
                    response.data.message
                );
                setServerError(response.data.message);
            }
        } catch (error) {
            console.error("Update password request failed:", error);
        }
    }

    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <h1 className="center">Update Password</h1>

            {serverError && (
                <span className="error-message">({serverError})</span>
            )}
            <br />

            <input type="hidden" value={user.user_id} name="user_id" />

            <Input
                label="Current Password*"
                id="old_password"
                type="password"
                name="old_password"
                autoFocus
                error={oldPasswordError}
            />

            <Input
                label="New Password*"
                id="new_password"
                type="password"
                name="new_password"
                autoFocus
                error={newPasswordError}
            />

            <Input
                label="Confirm New Password*"
                id="confirm_new_password"
                type="password"
                name="confirm_new_password"
                autoFocus
                error={newPassword2Error}
            />

            <button>Submit</button>
        </form>
    );
}
