class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      UserMailer.registration_confirmation(@user).deliver
      render(
        json: ["Thank you for signing up! An email has been sent to activate your account."], status: 401
      )
      # redirect_to root_url
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def confirm_email
    @user = User.find_by_confirm_token(params[:id])
    if @user
      @user.email_activate
      login(@user)
      redirect_to root_url
    else
      redirect_to root_url
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :name)
  end
end
