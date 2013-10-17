class Comment < ActiveRecord::Base
  belongs_to :contest

  def as_json(options={})
    {
      id: self.id,
      contest_id: self.contest_id,
      side: self.side,
      username: self.username,
      comment: self.comment
    }
  end
end
