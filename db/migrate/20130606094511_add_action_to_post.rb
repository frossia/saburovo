class AddActionToPost < ActiveRecord::Migration
  def change
    add_column :posts, :action, :boolean
    add_column :posts, :action_date, :date
  end
end
