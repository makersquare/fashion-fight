class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.references :contest, index: true
      t.string :side
      t.string :username
      t.string :comment

      t.timestamps
    end
  end
end
