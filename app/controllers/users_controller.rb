class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save!
      sign_in(@user)
      redirect_to links_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def show
    @user = User.find_by(id: params[:user_id])
  end

  private
  def user_params
    params.require(:user).permit(:password, :username)
  end
end
