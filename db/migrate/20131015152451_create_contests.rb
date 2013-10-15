class CreateContests < ActiveRecord::Migration
  def change
    create_table :contests do |t|
      t.string :title
      t.string :left
      t.string :right

      t.timestamps
    end
  end
end
