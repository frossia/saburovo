class Post < ActiveRecord::Base
  attr_accessible :title, :body, :action, :action_date,
                  :id, :created_at, :updated_at

  belongs_to :category
  attr_accessible :category_id


end
