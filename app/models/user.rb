class User < ActiveRecord::Base
  attr_accessible :mail, :name, :password, :password_confirmation, :description, :avatar_type, :avatar_path
  
  VALID_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i
  validates :mail, :format => { with: VALID_REGEX, :on => :create },
                          :uniqueness => { :case_sensitive => false }
  validates :name, :presence => true, :length => { :maximum => 50 }
  validates :password, :presence => true, :length => { :minimum => 6 }
  validates :password_confirmation, :presence => true
end
