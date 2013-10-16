class RenameVotesToComments < ActiveRecord::Migration
  def change
    rename_table :votes, :comments
  end
end
