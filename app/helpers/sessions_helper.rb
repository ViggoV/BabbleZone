module SessionsHelper

  def sign_in(user, secure_remember_token)
      cookies[:remember_token] = secure_remember_token
      self.current_user = user
  end
  
  def user_logged_in?(user=nil)
    if (!user.nil?)
      current_user == user
    else
      !current_user.nil?
    end
  end
  
  def current_user
    @current_user ||= User.find_by_remember_token(cookies[:remember_token])
  end
  
  def current_user=(user)
    @current_user = user
  end
  
  def sign_out
    current_user = nil
    cookies.delete :remember_token
  end

end
