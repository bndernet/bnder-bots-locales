import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_ja {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string, taskTitle: string): string {
                return `タスク **${id}** ${taskTitle} の期限は ${deadline} です。[${guildName}](<https://discord.com/channels/${guildId}>) サーバーで確認できます。`;
            },
            assigned_notification(guildName: string, guildId: string, id: string, taskText: string): string {
                return `あなたはタスク **${id}** ${taskText} に割り当てられました。[${guildName}](<https://discord.com/channels/${guildId}>) サーバーで確認できます。`;
            },
            assigned_embed_title(id: string): string {
                return `タスク ${id} が割り当てられました`;
            },
            assigned_embed_footer: "この通知は \"/preferences direct_messages\" コマンドで無効にできます。",
            assigned_embed_button_in_progress: "進行中としてマーク",
            assigned_embed_button_done: "完了としてマーク",
            deadline_was_in_past(id: string, guildName: string, guildId: string, taskTitle: string): string {
                return `タスク **${id}** ${taskTitle} の期限は過ぎています。[${guildName}](<https://discord.com/channels/${guildId}>) サーバーで確認できます。`;
            },
            repeat_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `あなたが割り当てられているタスク **${id}** ${taskTitle} は繰り返しとなり、再度実行する必要があります。[${guildName}](<https://discord.com/channels/${guildId}>) サーバーで確認できます。`;
            },
            repeat_notification_embed_title(id: string): string {
                return `タスク ${id} が繰り返されました`;
            },
            deadline_alert: "タスクの期限",
            commented_embed_title(id: string): string {
                return `タスク ${id} にコメントが追加されました`;
            },
            commented_notification(guildName: string, guildId: string, author: string, commentText: string): string {
                return `[${guildName}](<https://discord.com/channels/${guildId}>) サーバーで ${author} によってタスクにコメントが追加されました: ${commentText}`;
            },
            comment_response_button: "コメントに返信",
            stop_followup_reminder_button: "フォローアップリマインダーを停止",
            extend_deadline_by_one_day_button: "期限を1日延長",
            extend_deadline_by_two_days_button: "期限を2日延長",
            extend_deadline_by_one_week_button: "期限を1週間延長",
            subscriber_added_notification(guildName: string, guildId: string, id: string, taskText: string, addedBy: string): string {
                return `あなたはタスク **${id}** ${taskText} の購読者として、<@${addedBy}> によりサーバー [${guildName}](<https://discord.com/channels/${guildId}>) に追加されました。このタスクに変更があると通知が届きます。通知を停止したい場合は、下のボタンをクリックしてください。`;
            },
            subscriber_added_notification_unsubscribe_button: "購読解除",
            subscriber_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `あなたがサーバー [${guildName}](<https://discord.com/channels/${guildId}>) で購読しているタスク **${id}** ${taskTitle} が変更されました:`
            },
            subscriber_notification_footer: "このタスクの通知は「/task unsubscribe」で無効化できます",
            subscriber_embed_title(id: string): string {
                return `タスク ${id} が更新されました`;
            },
            milestone_due_notification(guildName: string, guildId: string, milestoneName: string): string {
                return `マイルストーン **${milestoneName}** の期限が6時間以内に迫っています。[${guildName}](<https://discord.com/channels/${guildId}>) サーバーで確認できます。完了すべきタスクがあります。`;
            },
            status_todo: "未着手",
            status_in_progress: "進行中",
            status_done: "完了"
        },
        webhookLogging: {
            id_field: "ID",
            deadline_field: "期限",
            assignees_field: "割り当て先",
            status_field: "ステータス",
            todos_field: "Todo",
            delete_at_field: "削除予定日時",
            project_field: "プロジェクト",
            topic_field: "トピック",
            text_field: "テキスト",
            role_field: "役職",
            permission_field: "権限",
            user_field: "ユーザー",
            preset_field: "プリセット",
            priority_field: "優先度",
            label_field: "ラベル",
            manager_field: "マネージャー",
            repeat_interval_field: "繰り返し間隔（日単位）",
            repeat_end_date_field: "繰り返し終了日",
            milestone_field: "マイルストーン",
            due_date_field: "期限日",
            status_field_value(status: number): string {
                switch (status) {
                    case 0:
                        return "未着手";
                    case 1:
                        return "進行中";
                    case 2:
                        return "完了";
                    default:
                        return "不明";
                }
            },
            deadline_due: {
                title(id: string): string {
                    return `タスク ${id} の期限`;
                },
                description(id: string, deadline: string): string {
                    return `タスク **${id}** の期限は ${deadline} です。`;
                }
            },
            task_deleted: {
                title(id: string): string {
                    return `タスク ${id} が削除されました。`;
                },
                description(id: string): string {
                    return `タスク ${id} が削除されました。`;
                }
            },
            repeat_set: {
                title(id: string): string {
                    return `タスク ${id} が繰り返されました。`;
                },
                description(id: string): string {
                    return `タスク ${id} が繰り返され、状態が「未着手」に設定されました。`;
                }
            },
            task_created: {
                title(id: string): string {
                    return `タスク ${id} が作成されました。`;
                },
                description(task_text: string, id: string): string {
                    return `タスク ${id} が作成されました。テキスト: ${task_text}`;
                }
            },
            task_updated: {
                title(id: string): string {
                    return `タスク ${id} が更新されました。`;
                },
                description(id: string): string {
                    return `タスク ${id} が更新され、以下のデータが変更されました。`;
                }
            },
            project_created: {
                title: "プロジェクトが作成されました",
                description(projectName: string): string {
                    return `プロジェクト ${projectName} が作成されました`;
                }
            },
            project_deleted: {
                title: "プロジェクトが削除されました",
                description(projectName: string): string {
                    return `プロジェクト ${projectName} が削除されました`;
                }
            },
            task_status_changed: {
                title(id: string): string {
                    return `タスク ${id} のステータスが変更されました`;
                }
            },
            permission_granted: {
                title: "権限が付与されました",
            },
            permission_revoked: {
                title: "権限が取り消されました",
            },
            preset_applied: {
                title: "プリセットが適用されました",
            },
            deadline_was_in_past: {
                title(id: string): string {
                    return `タスク ${id} の期限が過ぎています`;
                }
            },
            project_updated: {
                title: "プロジェクトが更新されました",
                description(name: string): string {
                    return `プロジェクト ${name} が更新されました`;
                }
            },
            test_message: {
                title: "テストメッセージ",
                description: "このメッセージが表示されている場合、Webhook は正常に動作しており、ログ記録が有効になっています。"
            },
            comment_added: {
                title(id: string): string {
                    return `タスク ${id} にコメントが追加されました`;
                }
            },
            comment_deleted: {
                title(id: string): string {
                    return `タスク ${id} からコメントが削除されました`;
                }
            },
            topic_created: {
                title: "トピックが作成されました",
                description(name: string): string {
                    return `トピック ${name} が作成されました`;
                }
            },
            topic_updated: {
                title: "トピックが更新されました",
                description(name: string): string {
                    return `トピック ${name} が更新されました`;
                }
            },
            topic_deleted: {
                title: "トピックが削除されました",
                description(name: string): string {
                    return `トピック ${name} が削除されました`;
                }
            },
            document_created: {
                title(id: string): string {
                    return `ドキュメント ${id} が作成されました`;
                },
                description(name: string): string {
                    return `ドキュメント ${name} が作成されました`;
                }
            },
            document_updated: {
                title(id: string): string {
                    return `ドキュメント ${id} が更新されました`;
                },
                description(name: string): string {
                    return `ドキュメント ${name} が更新されました`;
                }
            },
            document_deleted: {
                title(id: string): string {
                    return `ドキュメント ${id} が削除されました`;
                },
                description(name: string): string {
                    return `ドキュメント ${name} が削除されました`;
                }
            },
            label_created: {
                title: "ラベルが作成されました",
                description(name: string): string {
                    return `ラベル ${name} が作成されました`;
                }
            },
            label_updated: {
                title: "ラベルが更新されました",
                description(name: string): string {
                    return `ラベル ${name} が更新されました`;
                }
            },
            label_deleted: {
                title: "ラベルが削除されました",
                description(name: string): string {
                    return `ラベル ${name} が削除されました`;
                }
            },
            attachments_field: "添付ファイル",
            milestone_created: {
                title: "マイルストーンが作成されました",
            },
            milestone_updated: {
                title: "マイルストーンが更新されました",
            },
            milestone_deleted: {
                title: "マイルストーンが削除されました",
            },
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string,): string {
                return `もうすぐイベント (${id}) **${name}** が ${durationTillEventMinutes} 分後に、${startTime} に [${guildName}](<https://discord.com/channels/${guildId}>) で開始されます。`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `あなたはイベント ${eventId} に <@${inviterId}> から招待されました: **${eventName}** が ${start} に開始し、${end} に終了します。\n-# すべての日付は ${timezone} タイムゾーンで計算されています。サーバー全体のタイムゾーンを変更するには「/settings timezone」を使用するか、あなた自身のタイムゾーンを変更するには「/preferences timezone」を使用してください。`;
                },
                accept_button: "承認",
                deny_button: "拒否"
            },
            edit_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `<@${inviterId}> がイベント ${eventId} を更新しました: **${eventName}** が ${start} に開始し、${end} に終了します。\n-# すべての日付は ${timezone} タイムゾーンで計算されています。サーバー全体のタイムゾーンを変更するには「/settings timezone」を使用するか、あなた自身のタイムゾーンを変更するには「/preferences timezone」を使用してください。`
                }
            },
            booking_reminder: {
                content(workspaceName: string, durationTillEventMinutes: number, location: string, start: string, end: string, timezone: string): string {
                    return `${workspaceName} の予約は約 ${durationTillEventMinutes} 分後に開始されます（${start} - ${end}, ${timezone}）。${location}`;
                },
                title: "予約開始のリマインダー",
                manage_bookings_button: "予約を管理",
            }
        },
        pro_granted_notification(guildId: string, guildName: string): string {
            return `おめでとうございます！サーバー [${guildName}](<https://discord.com/channels/${guildId}>) のプロ シートに配置されました。つまり、[プロ機能](<https://bnder.net/pricing>) にアクセスできるようになりました。お楽しみください！`;
        },
        pro_seat_request_notification(guildId: string, guildName: string, requesterUsername: string): string {
            return `ユーザー **${requesterUsername}** がワークスペース [${guildName}](<https://discord.com/channels/${guildId}>) で Pro シートをリクエストしました。利用可能な Pro シートがある場合は、下のボタンを使って付与できます。Pro シートを追加する必要がある場合は、[ワークスペース設定](<https://bnder.net/app/settings/${guildId}/default?tab=1>) にアクセスしてサブスクリプションをアップグレードしてください。`;
        },
        request_pro_seat_button_label: "Pro シートを付与",
        payment_failed_notification(guildId: string, guildName: string, customerPortalLink: string): string {
            return `# 🚨 必要な対応: Pro サブスクリプションの支払いに失敗しました\n[${guildName}](<https://discord.com/channels/${guildId}>) の 1 つ以上の Pro シートの支払いを処理できませんでした。Pro 機能へのアクセスを失うことを避けるため、[支払い情報を更新し、請求書を今すぐお支払いください](<${customerPortalLink}>)。\n\n何も対応しないと、Pro 機能はまもなく無効になります。\n\nお困りですか? [サポートにお問い合わせください](https://bnder.net/discord) — いつでもお手伝いいたします。`;
        },
        files: {
            file_shared_notification(guildName: string, guildId: string, fileName: string, userId: string): string {
                return `ファイル **${fileName}** がサーバー [${guildName}](<https://discord.com/channels/${guildId}>) で <@${userId}> によって共有されました。`;
            },
            folder_shared_notification(guildName: string, guildId: string, folderName: string, userId: string): string {
                return `フォルダ **${folderName}** がサーバー [${guildName}](<https://discord.com/channels/${guildId}>) で <@${userId}> によって共有されました。`;
            }
        },
        self_data_download_ready: "あなたのデータはダウンロード準備が整いました。[アプリ](<https://bnder.net/app/>) からダウンロードできます。ダウンロードリンクは2週間有効です。",
        tutorial_tasks: {
            tutorial_label_name: "チュートリアル",
            create_first_task_title: "最初のタスクを作成する",
            create_first_task_description: "タスクを作成して始めましょう。名前を付け、必要に応じて説明を追加してください。",
            change_task_status_title: "タスクの状態を変更する",
            change_task_status_description: "タスクの状態を「進行中」または「完了」に変更するには、該当する列にドラッグしてください。",
            invite_team_members_title: "チームメンバーを招待する",
            invite_team_members_description: "チームメンバーをワークスペースに招待しましょう。招待はユーザー設定で確認できます。",
            explore_workspace_title: "ワークスペースを探検する",
            explore_workspace_description: "ワークスペースを探検して機能に慣れましょう。タスクの作成、メンバーの管理などができます。日付形式、言語、タイムゾーンの設定も確認できます。"
        },
        mails: {
            footer: {
                company_limited_liability: "有限責任",
                company_address: "Im Flath 12 - 38542 Leiferde - ドイツ",
                company_register_court: "ヒルデスハイム地方裁判所 - HRB 209373",
                company_ceo: "代表取締役: Jan Brinkmann",
                company_contact: "メール: contact@bnder.net - 電話: +49 511 45032009",
                legal_automated_email: "このメールは自動送信されました。返信しないでください。",
                legal_privacy_policy_prefix: "当社のプライバシーポリシーは以下でご覧いただけます",
                legal_imprint: "会社概要",
                legal_terms_of_use: "利用規約",
                legal_privacy_policy: "プライバシーポリシー",
            },
            verify_email: {
                headline: "メールアドレスの確認をお願いします",
                text: "下のリンクをクリックして、メールアドレスの確認を完了してください。",
                primaryActionText: "メールアドレスを確認",
            },
            password_changed: {
                headline: "パスワードが変更されました",
                text: "パスワードが正常に変更されました。もしこの変更に心当たりがない場合は、すぐに contact@bnder.net にご連絡ください。",
            },
            reset_password: {
                headline: "パスワードをリセット",
                text: "パスワードをリセットするには、下のボタンをクリックしてください。パスワードリセットをリクエストしていない場合は、このメールを無視してください。",
                primaryActionText: "パスワードをリセット",
            },
            workspace_invitation: {
                headline: "ワークスペースへの招待",
                text(workspaceName: string): string {
                    return `あなたはワークスペース「${workspaceName}」に招待されました。招待を受け入れて参加するには、下のボタンをクリックしてください。`;
                },
                primaryActionText: "ワークスペースに参加",
            },
            task_assigned: {
                subject: "新しいタスクが割り当てられました",
                greeting(guildName: string): string {
                    return `ワークスペース ${guildName} のタスクが割り当てられました。`;
                },
                no_deadline: "このタスクには期限が設定されていません。",
                open_in_app: "アプリでタスクを開く",
            },
            primaryPasteActionLinkText: "または、以下のリンクをブラウザに貼り付けてください：",
            task_subscriber: {
                added_subject: "タスクの購読者として追加されました",
                subscriber_added(guildName: string): string {
                    return `ワークスペース ${guildName} のタスクの購読者として追加されました。このタスクに変更があると通知が届きます。`;
                },
                subject: "タスク更新通知",
                activity(guildName: string): string {
                    return `ワークスペース ${guildName} であなたが購読しているタスクが変更されました。`;
                }
            },
            self_data_download_ready: {
                headline: "データのダウンロード準備ができました",
                text: "あなたのデータをダウンロード用に準備しました。アプリ内でアクセスできます。ダウンロードリンクは2週間有効です。",
            },
            payment_failed: {
                headline: "🚨 対応が必要：Proサブスクリプションの支払いに失敗しました",
                text(guildName: string): string {
                    return `${guildName} の1つ以上の Pro シートの支払いを処理できませんでした。Pro 機能へのアクセスを失わないように、支払い情報を更新し、請求書を今すぐお支払いください。対応がない場合、Pro 機能はまもなく無効になります。サポートが必要ですか？お問い合わせください — 私たちがサポートします。`;
                },
                primaryActionText: "支払い情報を更新"
            },
            // Ticket notification mail and Discord localization keys.
            ticket_notifications: {
                subject_prefix_new: "新しいチケット:",
                subject_prefix_update: "チケット更新:",
                subject_prefix_sla_warning: "チケットSLA警告:",
                subject_prefix_status(statusLabel: string): string {
                    return `チケット ${statusLabel}:`;
                },
                body_created: "新しいチケットが作成されました。",
                body_public_message(ticketTitle: string, messagePreview: string): string {
                    return `新しい公開メッセージが投稿されました。\n\nチケット: ${ticketTitle}\n\nメッセージプレビュー: ${messagePreview}`;
                },
                body_status_closed(statusLabel: string, ticketTitle: string): string {
                    return `チケットのステータスが\"${statusLabel}\"に変更されました。\n\nチケット: ${ticketTitle}`;
                },
                body_auto_closed(ticketTitle: string): string {
                    return `設定された時間枠内に報告者からの返信がなかったため、チケットは自動的にクローズされました。\n\nチケット: ${ticketTitle}`;
                },
                body_sla_warning(ticketTitle: string, slaName: string, currentAge: string, targetAge: string): string {
                    return `このチケットはSLA警告しきい値に達しました。\n\nチケット: ${ticketTitle}\nSLA: ${slaName}\n現在の経過時間: ${currentAge}\n目標: ${targetAge}`;
                },
                action_open_ticket: "チケットを開く",
                action_reply_to_ticket: "チケットに返信",
                action_unsubscribe: "このチケットの購読を解除",
                unknown_inbox_subject: "不明なチケット受信アドレス",
                unknown_inbox_headline: "不明なチケット受信アドレス",
                unknown_inbox_text_with_recipient(recipientAddress: string): string {
                    return `${recipientAddress} 宛のメールを受信しましたが、この受信アドレスはチケット受付用に設定されていません。チケットは作成されませんでした。\n\nサポートチームに連絡し、正しいプロジェクト専用チケットメールアドレスを確認してください。`;
                },
                unknown_inbox_text_without_recipient: "メールを受信しましたが、この受信アドレスはチケット受付用に設定されていません。チケットは作成されませんでした。\n\nサポートチームに連絡し、正しいプロジェクト専用チケットメールアドレスを確認してください。",
                feature_locked_subject: "チケットメール機能はProが必要です",
                feature_locked_headline: "チケットメール機能はProが必要です",
                feature_locked_text: "メール返信を受信しましたが、チケットのメール返信機能はProワークスペースでのみ利用できます。返信はチケットに追加されませんでした。\n\nサポートチームに連絡し、ワークスペースをProにアップグレードするよう依頼してください。",
                project_member_subject(projectId: string, ticketTitle: string): string {
                    return `プロジェクト ${projectId} に新しいチケット: ${ticketTitle}`;
                },
                project_member_headline: "新しいチケットが作成されました",
                project_member_text(projectId: string, ticketTitle: string): string {
                    return `プロジェクト ${projectId} に新しいチケットが作成されました。\n\nチケット: ${ticketTitle}`;
                },
                project_member_discord_dm(projectId: string, ticketTitle: string, ticketUrl: string, ticketId: string): string {
                    return `プロジェクト **${projectId}** に新しいチケットが作成されました。\nチケット: [${ticketTitle}](<${ticketUrl}>)\nID: \`${ticketId}\``;
                },
                body_reply_received_confirmation(ticketTitle: string): string {
                    return `あなたの返信はチケットの会話に正常に追加されました。\n\nチケット: ${ticketTitle}`;
                },
                subject_assigned(ticketTitle: string): string {
                    return `チケットに割り当てられました: ${ticketTitle}`;
                },
                headline_assigned(ticketTitle: string): string {
                    return `「${ticketTitle}」に割り当てられました`;
                },
                body_assigned(ticketTitle: string): string {
                    return `チケット「${ticketTitle}」に割り当てられました。`;
                },
                subject_reassigned(ticketTitle: string): string {
                    return `チケットがあなたに再割り当てされました: ${ticketTitle}`;
                },
                headline_reassigned(ticketTitle: string): string {
                    return `チケットがあなたに再割り当てされました: ${ticketTitle}`;
                },
                body_reassigned(ticketTitle: string): string {
                    return `あなたがチケット「${ticketTitle}」の担当になりました。`;
                },
                discord_dm_assigned(ticketTitle: string, ticketUrl: string, ticketId: string): string {
                    return `**「${ticketTitle}」に割り当てられました**\nチケット「${ticketTitle}」に割り当てられました。\n\n[チケットを開く](<${ticketUrl}>)\nID: \`${ticketId}\``;
                },
                discord_dm_reassigned(ticketTitle: string, ticketUrl: string, ticketId: string): string {
                    return `**チケットがあなたに再割り当てされました: ${ticketTitle}**\nあなたがチケット「${ticketTitle}」の担当になりました。\n\n[チケットを開く](<${ticketUrl}>)\nID: \`${ticketId}\``;
                },
                subject_assignee_reporter_update(ticketTitle: string): string {
                    return `担当チケットで報告者から更新がありました: ${ticketTitle}`;
                },
                headline_assignee_reporter_update(ticketTitle: string): string {
                    return `「${ticketTitle}」で報告者から更新がありました`;
                },
                discord_dm_assignee_reporter_update(ticketTitle: string, notificationText: string, ticketUrl: string, ticketId: string): string {
                    return `担当チケット「${ticketTitle}」で報告者から更新がありました。\n${notificationText}\n\n[チケットを開く](<${ticketUrl}>)\nID: \`${ticketId}\``;
                },
                subject_mentioned(ticketTitle: string): string {
                    return `チケットでメンションされました: ${ticketTitle}`;
                },
                headline_mentioned(ticketTitle: string): string {
                    return `「${ticketTitle}」でメンションされました`;
                },
                body_mentioned(messagePreview: string): string {
                    return `メッセージプレビュー: ${messagePreview}`;
                },
                discord_dm_mentioned(ticketTitle: string, messagePreview: string, ticketUrl: string, ticketId: string): string {
                    return `チケット「${ticketTitle}」でメンションされました。\nプレビュー: ${messagePreview}\n\n[チケットを開く](<${ticketUrl}>)\nID: \`${ticketId}\``;
                },
            },

            open_app: "アプリを開く",
        }
    }
}