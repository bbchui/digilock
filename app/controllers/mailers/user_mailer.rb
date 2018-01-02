class UserMailer < ActionMailer::Base
  default :from => "bbchui.project@gmail.com"

  def registration_confirmation(user)
    @user = user
    mail(:to => "#{user.name} <#{user.username}>", :subject => "Please confirm your registration")
  end

end
