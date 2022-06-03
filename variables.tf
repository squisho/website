variable "bucket_name" {
  default = "react-aws-terraform-github-actions"
  description = "website s3 terraform bucket"
}
variable "aws_region" {
  type = string
  default = "us-west-2"
}
