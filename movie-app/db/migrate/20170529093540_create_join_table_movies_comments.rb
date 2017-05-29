class CreateJoinTableMoviesComments < ActiveRecord::Migration[5.1]
  def change
    create_join_table :movies, :comments do |t|
      # t.index [:movie_id, :comment_id]
      # t.index [:comment_id, :movie_id]
    end
  end
end
