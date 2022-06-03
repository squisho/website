provider "aws" {
  region = var.aws_region
}
provider "aws" {
  region = "us-east-1"
  alias  = "use1"
}
locals {
  domain       = "react-aws-terraform-github-actions.chrispetrone.com"
  s3_origin_id = "s3-react-aws-terraform-github-actions"
}

data "aws_iam_policy_document" "s3-website-policy" {
  statement {
    actions = [
      "s3:GetObject"
    ]
    principals {
      identifiers = ["*"]
      type        = "AWS"
    }
    resources = [
      "arn:aws:s3:::${var.bucket_name}/*"
    ]
  }
}

resource "aws_s3_bucket" "react-aws-terraform-github-actions-s3-bucket" {
  bucket = var.bucket_name
  acl    = "public-read"
  policy = data.aws_iam_policy_document.s3-website-policy.json
  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}
resource "aws_s3_bucket_public_access_block" "react-aws-terraform-github-actions-s3-access-control" {
  bucket             = aws_s3_bucket.react-aws-terraform-github-actions-s3-bucket.id
  block_public_acls  = true
  ignore_public_acls = true
}
