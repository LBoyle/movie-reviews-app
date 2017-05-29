class DropMoviesComments < ActiveRecord::Migration[5.1]
  def change
    drop_table :comments_movies
  end
end
