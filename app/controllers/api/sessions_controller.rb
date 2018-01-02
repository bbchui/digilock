class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      if @user.email_confirmed
        login(@user)
        render "api/users/show"
      else
        render(
          json: ["Confirmation email sent! Please activate your account."], status: 401
        )
      end
    else
      render(
        json: ["Invalid email/password combination"],
        status: 401
      )
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render(
        json: ["Nobody signed in"],
        status: 401
      )
    end
  end
end
