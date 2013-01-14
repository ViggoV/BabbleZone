class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :mail
      t.decimal :avatar_type
      t.string :avatar_path
      t.text :description
      t.string :password_digest

      t.timestamps
    end
  end
end
