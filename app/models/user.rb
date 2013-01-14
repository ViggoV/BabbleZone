class User < ActiveRecord::Base
  attr_accessible :avatar_path, :avatar_type, :description, :mail, :name, :password_digest
end
