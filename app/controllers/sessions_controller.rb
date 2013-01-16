class SessionsController < ApplicationController

def create
  user = User.find_by_mail(params[:mail].to_s)
  if user.authenticate(params[:password].to_s)
    remember_token = SecureRandom.base64
    if user.update_attribute(:remember_token, remember_token)
      sign_in user, remember_token
      flash[:success] = "Sign In Succeeded, yay!"
      redirect_to user_path(user)
    else
      flash[:error] = "Ooops.. Something went wrong! Try again.."
      redirect_to request.referer
    end
  else
    flash[:error] = "Sorry, we couldn't log you in.. Try again!"
    redirect_to request.referer
  end
end

def destroy
end

end
