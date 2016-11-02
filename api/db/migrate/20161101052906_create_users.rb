class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.integer :height
      t.integer :weight
      t.string :animal

      t.timestamps
    end
  end
end
