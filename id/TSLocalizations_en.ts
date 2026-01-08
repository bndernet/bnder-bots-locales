import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_id {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string, taskTitle: string): string {
                return `Tenggat waktu untuk tugas **${id}** ${taskTitle} jatuh tempo pada ${deadline} di workspace [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            assigned_notification(guildName: string, guildId: string, id: string, taskText: string): string {
                return `Anda telah ditugaskan ke tugas **${id}** ${taskText} di workspace [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            assigned_embed_title(id: string): string {
                return `Tugas ${id} ditugaskan`;
            },
            assigned_embed_footer: "Notifikasi ini dapat dinonaktifkan menggunakan perintah \"/preferences direct_messages\".",
            assigned_embed_button_in_progress: "Tandai sebagai sedang dikerjakan",
            assigned_embed_button_done: "Tandai sebagai selesai",
            deadline_was_in_past(id: string, guildName: string, guildId: string, taskTitle: string): string {
                return `Tenggat waktu untuk tugas **${id}** ${taskTitle} sudah lewat di workspace [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            repeat_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `Tugas **${id}** ${taskTitle} yang ditugaskan kepada Anda telah diulang dan perlu dikerjakan lagi di workspace [${guildName}](<https://discord.com/channels/${guildId}>)`;
            },
            repeat_notification_embed_title(id: string): string {
                return `Tugas ${id} diulang`;
            },
            deadline_alert: "Tenggat waktu tugas",
            commented_embed_title(id: string): string {
                return `Komentar ditambahkan ke tugas ${id}`;
            },
            commented_notification(guildName: string, guildId: string, author: string, commentText: string): string {
                return `Sebuah komentar ditambahkan ke tugas di workspace [${guildName}](<https://discord.com/channels/${guildId}>) oleh ${author}: ${commentText}`;
            },
            comment_response_button: "Balas komentar",
            stop_followup_reminder_button: "Hentikan pengingat tindak lanjut",
            extend_deadline_by_one_day_button: "Perpanjang tenggat waktu 1 hari",
            extend_deadline_by_two_days_button: "Perpanjang tenggat waktu 2 hari",
            extend_deadline_by_one_week_button: "Perpanjang tenggat waktu 1 minggu",
            subscriber_added_notification(guildName: string, guildId: string, id: string, taskText: string, addedBy: string): string {
                return `Anda telah ditambahkan sebagai pelanggan (subscriber) untuk tugas **${id}** ${taskText} di workspace [${guildName}](<https://discord.com/channels/${guildId}>) oleh <@${addedBy}>. Anda akan menerima notifikasi saat ada perubahan pada tugas ini. Jika Anda ingin berhenti menerima notifikasi, Anda dapat menekan tombol di bawah ini.`;
            },
            subscriber_added_notification_unsubscribe_button: "Berhenti berlangganan",
            subscriber_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `Tugas **${id}** ${taskTitle} yang Anda langgani di workspace [${guildName}](<https://discord.com/channels/${guildId}>) telah berubah:`;
            },
            subscriber_notification_footer: "Nonaktifkan notifikasi untuk tugas ini dengan menggunakan perintah \"/task unsubscribe\"",
            subscriber_embed_title(id: string): string {
                return `Tugas ${id} diperbarui`;
            },
            milestone_due_notification(guildName: string, guildId: string, milestoneName: string): string {
                return `Milestone **${milestoneName}** akan jatuh tempo dalam kurang dari 6 jam di workspace [${guildName}](<https://discord.com/channels/${guildId}>) dan memiliki tugas yang perlu diselesaikan.`;
            },
            status_todo: "To-do",
            status_in_progress: "Sedang dikerjakan",
            status_done: "Selesai"
        },
        webhookLogging: {
            id_field: "Id",
            deadline_field: "Tenggat waktu",
            assignees_field: "Penanggung jawab",
            status_field: "Status",
            todos_field: "To-do",
            delete_at_field: "Hapus pada",
            project_field: "Proyek",
            topic_field: "Topik",
            text_field: "Teks",
            role_field: "Peran",
            permission_field: "Izin",
            user_field: "Pengguna",
            preset_field: "Preset",
            priority_field: "Prioritas",
            label_field: "Label",
            manager_field: "Manajer",
            repeat_interval_field: "Interval pengulangan dalam hari",
            repeat_end_date_field: "Tanggal akhir pengulangan",
            milestone_field: "Milestone",
            due_date_field: "Tanggal jatuh tempo",
            status_field_value(status: number): string {
                switch (status) {
                    case 0:
                        return "To-do";
                    case 1:
                        return "Sedang dikerjakan";
                    case 2:
                        return "Selesai";
                    default:
                        return "Tidak diketahui";
                }
            },
            deadline_due: {
                title(id: string): string {
                    return `Tenggat waktu untuk tugas ${id}`;
                },
                description(id: string, deadline: string): string {
                    return `Tenggat waktu untuk tugas **${id}** jatuh tempo pada ${deadline}`;
                }
            },
            task_deleted: {
                title(id: string): string {
                    return `Tugas ${id} dihapus.`;
                },
                description(id: string): string {
                    return `Tugas ${id} telah dihapus.`;
                }
            },
            repeat_set: {
                title(id: string): string {
                    return `Tugas ${id} diulang.`;
                },
                description(id: string): string {
                    return `Tugas ${id} telah diulang dan statusnya diatur menjadi to-do.`;
                }
            },
            task_created: {
                title(id: string): string {
                    return `Tugas ${id} dibuat.`;
                },
                description(task_text: string, id: string): string {
                    return `Tugas ${id} dibuat dengan teks: ${task_text}`;
                }
            },
            task_updated: {
                title(id: string): string {
                    return `Tugas ${id} diperbarui.`;
                },
                description(id: string): string {
                    return `Tugas ${id} telah diperbarui dan data berikut telah diubah.`;
                }
            },
            project_created: {
                title: "Proyek dibuat",
                description(projectName: string): string {
                    return `Proyek ${projectName} telah dibuat`;
                }
            },
            project_deleted: {
                title: "Proyek dihapus",
                description(projectName: string): string {
                    return `Proyek ${projectName} telah dihapus`;
                }
            },
            task_status_changed: {
                title(id: string): string {
                    return `Status tugas ${id} berubah`;
                }
            },
            permission_granted: {
                title: "Izin diberikan",
            },
            permission_revoked: {
                title: "Izin dicabut",
            },
            preset_applied: {
                title: "Preset diterapkan",
            },
            deadline_was_in_past: {
                title(id: string): string {
                    return `Tenggat waktu untuk tugas ${id} sudah lewat`;
                }
            },
            project_updated: {
                title: "Proyek diperbarui",
                description(name: string): string {
                    return `Proyek ${name} telah diperbarui`;
                }
            },
            test_message: {
                title: "Ini adalah pesan uji",
                description: "Jika Anda melihat pesan ini, webhook berfungsi dengan benar dan logging telah diaktifkan."
            },
            comment_added: {
                title(id: string): string {
                    return `Komentar ditambahkan ke tugas ${id}`;
                }
            },
            comment_deleted: {
                title(id: string): string {
                    return `Komentar dihapus dari tugas ${id}`;
                }
            },
            topic_created: {
                title: "Topik dibuat",
                description(name: string): string {
                    return `Topik ${name} telah dibuat`;
                }
            },
            topic_updated: {
                title: "Topik diperbarui",
                description(name: string): string {
                    return `Topik ${name} telah diperbarui`;
                }
            },
            topic_deleted: {
                title: "Topik dihapus",
                description(name: string): string {
                    return `Topik ${name} telah dihapus`;
                }
            },
            document_created: {
                title(id: string): string {
                    return `Dokumen ${id} dibuat`;
                },
                description(name: string): string {
                    return `Dokumen ${name} telah dibuat`;
                }
            },
            document_updated: {
                title(id: string): string {
                    return `Dokumen ${id} diperbarui`;
                },
                description(name: string): string {
                    return `Dokumen ${name} telah diperbarui`;
                }
            },
            document_deleted: {
                title(id: string): string {
                    return `Dokumen ${id} dihapus`;
                },
                description(name: string): string {
                    return `Dokumen ${name} telah dihapus`;
                }
            },
            label_created: {
                title: "Label dibuat",
                description(name: string): string {
                    return `Label ${name} telah dibuat`;
                }
            },
            label_updated: {
                title: "Label diperbarui",
                description(name: string): string {
                    return `Label ${name} telah diperbarui`;
                }
            },
            label_deleted: {
                title: "Label dihapus",
                description(name: string): string {
                    return `Label ${name} telah dihapus`;
                }
            },
            attachments_field: "Lampiran",
            milestone_created: {
                title: "Milestone dibuat",
            },
            milestone_updated: {
                title: "Milestone diperbarui",
            },
            milestone_deleted: {
                title: "Milestone dihapus",
            },
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string): string {
                return `Acara mendatang (${id}) **${name}** akan dimulai dalam ${durationTillEventMinutes} menit pada ${startTime} di [${guildName}](<https://discord.com/channels/${guildId}>).`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `Anda diundang ke acara ${eventId} oleh <@${inviterId}>: **${eventName}** mulai pada ${start} dan berakhir pada ${end}.\n-# Semua tanggal dihitung dalam ${timezone}. Gunakan \"/settings timezone\" untuk mengubah zona waktu untuk seluruh workspace, atau \"/preferences timezone\" untuk mengubah milik Anda sendiri.`;
                },
                accept_button: "Terima",
                deny_button: "Tolak"
            },
            edit_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `<@${inviterId}> memperbarui acara ${eventId}: **${eventName}** mulai pada ${start} dan berakhir pada ${end}.\n-# Semua tanggal dihitung dalam ${timezone}. Gunakan \"/settings timezone\" untuk mengubah zona waktu untuk seluruh workspace, atau \"/preferences timezone\" untuk mengubah milik Anda sendiri.`;
                }
            }
        },
        pro_granted_notification(guildId: string, guildName: string): string {
            return `Selamat! Anda telah ditempatkan di Pro Seat pada workspace [${guildName}](<https://discord.com/channels/${guildId}>). Ini berarti Anda sekarang memiliki akses ke [fitur Pro](<https://bnder.net/pricing>). Selamat menikmati!`;
        },
        pro_seat_request_notification(guildId: string, guildName: string, requesterUsername: string): string {
            return `Pengguna **${requesterUsername}** telah meminta Pro Seat di workspace [${guildName}](<https://discord.com/channels/${guildId}>). Jika Anda memiliki Pro Seat yang tersedia, Anda dapat memberikannya kepada mereka menggunakan tombol di bawah ini. Jika Anda membutuhkan lebih banyak Pro Seat, silakan kunjungi [pengaturan workspace Anda](<https://bnder.net/app/settings/${guildId}/default?tab=1>) untuk meng-upgrade langganan Anda.`;
        },
        request_pro_seat_button_label: "Berikan Pro Seat",
        payment_failed_notification(guildId: string, guildName: string, customerPortalLink: string): string {
            return `# 🚨 Tindakan Diperlukan: Pembayaran Gagal untuk Langganan Pro\nKami tidak dapat memproses pembayaran untuk satu atau beberapa Pro Seat di [${guildName}](<https://discord.com/channels/${guildId}>). Untuk menghindari kehilangan akses ke fitur Pro, silakan [perbarui info pembayaran Anda dan bayar invoice sekarang](<${customerPortalLink}>).\n\nFitur Pro Anda akan segera dinonaktifkan jika tidak ada tindakan.\n\nButuh bantuan? [Hubungi dukungan](https://bnder.net/discord) — kami siap membantu.`;
        },
        files: {
            file_shared_notification(guildName: string, guildId: string, fileName: string, userId: string): string {
                return `File **${fileName}** telah dibagikan kepada Anda di workspace [${guildName}](<https://discord.com/channels/${guildId}>) oleh <@${userId}>`;
            },
            folder_shared_notification(guildName: string, guildId: string, folderName: string, userId: string): string {
                return `Folder **${folderName}** telah dibagikan kepada Anda di workspace [${guildName}](<https://discord.com/channels/${guildId}>) oleh <@${userId}>`;
            }
        },
        self_data_download_ready: "Data Anda siap untuk diunduh. Anda dapat mengunduhnya di [aplikasi kami](<https://bnder.net/app/>). Tautan unduhan tersedia selama dua minggu.",
        tutorial_tasks: {
            tutorial_label_name: "Tutorial",
            create_first_task_title: "Buat tugas pertama Anda",
            create_first_task_description: "Mulailah dengan membuat sebuah tugas. Beri nama dan opsional tambahkan deskripsi.",
            change_task_status_title: "Ubah status tugas",
            change_task_status_description: "Ubah status tugas menjadi 'Sedang dikerjakan' atau 'Selesai' dengan menyeretnya ke kolom yang sesuai.",
            invite_team_members_title: "Undang anggota tim Anda",
            invite_team_members_description: "Undang anggota tim Anda untuk bergabung ke workspace. Mereka akan melihat undangan tersebut di pengaturan pengguna mereka.",
            explore_workspace_title: "Jelajahi workspace",
            explore_workspace_description: "Jelajahi workspace dan kenali fiturnya. Anda dapat membuat tugas, mengelola anggota, dan lainnya. Anda juga dapat melihat pengaturan untuk menyesuaikan format tanggal, bahasa, dan zona waktu."
        },
        mails: {
            footer: {
                company_limited_liability: "perusahaan dengan tanggung jawab terbatas (UG)",
                company_address: "Im Flath 12 - 38542 Leiferde - Jerman",
                company_register_court: "Pengadilan Negeri Hildesheim (Jerman) - HRB 209373",
                company_ceo: "CEO: Jan Brinkmann",
                company_contact: "Email: contact@bnder.net - Telepon: +49 511 45032009",
                legal_automated_email: "Ini adalah email otomatis. Mohon jangan membalas email ini.",
                legal_privacy_policy_prefix: "Silakan baca kebijakan privasi kami di",
                legal_imprint: "Imprint",
                legal_terms_of_use: "Ketentuan Penggunaan",
                legal_privacy_policy: "Kebijakan Privasi",
            },
            verify_email: {
                headline: "Verifikasi alamat email Anda",
                text: "Silakan konfirmasi alamat email Anda dengan mengklik tautan di bawah ini.",
                primaryActionText: "Verifikasi Email",
            },
            password_changed: {
                headline: "Kata Sandi Diubah",
                text: "Kata sandi Anda berhasil diubah. Jika Anda tidak memulai perubahan ini, silakan segera hubungi dukungan di contact@bnder.net",
            },
            reset_password: {
                headline: "Reset kata sandi Anda",
                text: "Untuk mereset kata sandi Anda, silakan klik tombol di bawah ini. Jika Anda tidak meminta reset kata sandi, silakan abaikan email ini.",
                primaryActionText: "Reset Kata Sandi",
            },
            workspace_invitation: {
                headline: "Undangan Workspace",
                text(workspaceName: string): string {
                    return `Anda telah diundang untuk bergabung ke workspace ${workspaceName}. Klik tombol di bawah ini untuk menerima undangan dan bergabung ke workspace.`;
                },
                primaryActionText: "Gabung Workspace",
            },
            task_assigned: {
                subject: "Anda ditugaskan tugas baru",
                greeting(guildName: string): string {
                    return `Anda telah ditugaskan ke sebuah tugas di workspace ${guildName}.`;
                },
                no_deadline: "Tidak ada tenggat waktu untuk tugas ini.",
                open_in_app: "Buka di App",
            },
            primaryPasteActionLinkText: "Atau tempelkan tautan di bawah ini ke browser Anda:",
            task_subscriber: {
                added_subject: "Anda ditambahkan sebagai subscriber sebuah tugas",
                subscriber_added(guildName: string): string {
                    return `Anda telah ditambahkan sebagai subscriber sebuah tugas di workspace ${guildName}. Anda akan menerima notifikasi saat ada perubahan pada tugas ini.`;
                },
                subject: "Notifikasi pembaruan tugas",
                activity(guildName: string): string {
                    return `Sebuah tugas yang Anda langgani di workspace ${guildName} telah berubah.`;
                }
            },
            self_data_download_ready: {
                headline: "Data Anda siap untuk diunduh",
                text: "Kami telah menyiapkan data Anda untuk diunduh. Anda dapat mengaksesnya di aplikasi. Tautan unduhan tersedia selama dua minggu.",
            },
            payment_failed: {
                headline: "🚨 Tindakan Diperlukan: Pembayaran Gagal untuk Langganan Pro",
                text(guildName: string): string {
                    return `Kami tidak dapat memproses pembayaran untuk satu atau beberapa Pro Seat di ${guildName}. Untuk menghindari kehilangan akses ke fitur Pro, silakan perbarui info pembayaran Anda dan bayar invoice sekarang. Fitur Pro Anda akan segera dinonaktifkan jika tidak ada tindakan. Butuh bantuan? Hubungi dukungan — kami siap membantu.`;
                },
                primaryActionText: "Perbarui Info Pembayaran"
            },
            open_app: "Buka App",
        }
    }
}