class User < ApplicationRecord
	validates :height, :weight, presence: true

end
